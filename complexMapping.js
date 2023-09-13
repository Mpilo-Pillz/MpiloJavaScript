const place = [
    {
        "long_name": "410",
        "short_name": "410",
        "types": [
            "street_number"
        ]
    },
    {
        "long_name": "Bond Street",
        "short_name": "Bond St",
        "types": [
            "route"
        ]
    },
    {
        "long_name": "Ferndale",
        "short_name": "Ferndale",
        "types": [
            "sublocality_level_1",
            "sublocality",
            "political"
        ]
    },
    {
        "long_name": "Randburg",
        "short_name": "Randburg",
        "types": [
            "locality",
            "political"
        ]
    },
    {
        "long_name": "City of Johannesburg Metropolitan Municipality",
        "short_name": "City of Johannesburg Metropolitan Municipality",
        "types": [
            "administrative_area_level_2",
            "political"
        ]
    },
    {
        "long_name": "Gauteng",
        "short_name": "GP",
        "types": [
            "administrative_area_level_1",
            "political"
        ]
    },
    {
        "long_name": "South Africa",
        "short_name": "ZA",
        "types": [
            "country",
            "political"
        ]
    },
    {
        "long_name": "2160",
        "short_name": "2160",
        "types": [
            "postal_code"
        ]
    }
];

const postalCode = place.find((pl) => {
    return pl.types[0] === "postal_code"
})

const getAddressLine = (addressLine, fullAddress) => {
    console.log(fullAddress);
    return fullAddress.find((pl) => {
        return pl.types[0] === addressLine
    })

}

console.log(postalCode.long_name);

console.log(getAddressLine("postal_code", place))

