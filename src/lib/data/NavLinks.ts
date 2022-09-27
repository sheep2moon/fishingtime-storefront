
type NavLink = {
    href: string,
    title: string
}

// <NavLink href="/store">Kontakt</NavLink>
//         <NavLink href="/sklep-test">TEST FILTRY</NavLink>
//         <NavLink href="/store">Regulamin</NavLink>
//         <NavLink href="/store">Wysyłka</NavLink>
//         <NavLink href="/store">Rabaty</NavLink>
//         <NavLink href="/polityka-prywatnosci">Polityka Prywatności</NavLink>
//         <NavLink href="/regulamin-sklepu">Regulamin</NavLink>

export const navLinks: NavLink[] = [
    {
        href: "/sklep-test",
        title: "Wersja z filtrami"
    },
    {
        href: "/polityka-prywatnosci",
        title: "Polityka Prywatności"
    },
    {
        href: "/regulamin-sklepu",
        title: "Regulamin"
    },
    {
        href: "/sklep-test",
        title: "Rabaty"
    },
    {
        href: "/sklep-test",
        title: "Wysyłka"
    },
]