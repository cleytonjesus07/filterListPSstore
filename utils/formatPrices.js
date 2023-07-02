export const formatedPrice = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL'
    })

    return formatter.format(price).replace("-", "").replace(".", ",")
}