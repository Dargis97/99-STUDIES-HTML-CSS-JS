Pasirasyti animacija naudojant 
@keyframes animacijos-pavadinimas {
    animacijos pradzia {
        ...
    }

    animacijos pabaiga {
        ...
    }
}

padaryti kazka panasaus i krovimosi (loading) elementa

    animation-name: animcijos-pavadinimas;
    animation-duration: laikas;
    animation-timing-function: animacijos pagreitis;
    animation-iteration-count: kiek kartu kartojasi (infinite bus be galo);

___________________________________________________________________________

Parasyti animacija naudojant hover + transition

(&:hover hover naudojimas su nesting)

Sukurti headeri ir mygtuka, ant mygtuko uzvedus pele, is uz ekrano ribu nuo kaires arba virsaus turetu islysti meniu su sarasu;

{
    transition: property-kuri-keiciam, per kiek laiko ivyksta animacija, animacijos pagreitis;
}