import { config } from "process";

interface ICheckout {
  checkStatus: () => Promise<boolean>;
}

class CheckoutService implements ICheckout {
  async checkStatus() {
    return true;
  }
}

class CheckoutLogger implements ICheckout {
  constructor(private checkout: ICheckout) {}

  async checkStatus() {
    console.log("Checking status");
    const result = await this.checkout.checkStatus();
    console.log("Status was", result);
    return result;
  }
}

class CheckoutTimer implements ICheckout {
  constructor(private checkout: ICheckout) {}

  async checkStatus() {
    const time = Date.now();

    const result = await this.checkout.checkStatus();

    console.log("Time taken", Date.now() - time);

    return result;
  }
}

function getCheckoutService() {
  const checkout = new CheckoutTimer(new CheckoutService());

  if (!config.Inprod) {
    return new CheckoutLogger(checkout);
  }

  return checkout;
}

const service = getCheckoutService();

if (await service.checkStatus()) {
  //redirect
}
