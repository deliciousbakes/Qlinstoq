
const getInitials = (name: string | null | undefined): string => {
    if (name) {
        const nameParts = name.split("")
        const nameInitials = 
            nameParts.map((part: string) => part.charAt(0).toUpperCase())
            return nameInitials.join("")
    } else {
        return "KM"
    }
}

export default getInitials