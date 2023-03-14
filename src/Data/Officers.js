import PeggyMarcone from '../images/peggy_marcone.jpg';
import SueSmith from '../images/Sue_Smith.jpg';
import DennisMiller from '../images/Dennis_Miller.jpg';
import DonnaMueller from '../images/Donna_Mueller.jpg';
import DeeHammann from '../images/Dee_Hammann.jpg';

const Officers = [
    {
        id: 1,
        position: "President",
        name: "Peggy Marcone",
        unit: 418,
        phoneNumber: "585-752-8279",
        term: 2024,
        email: "pmarcone1511@gmail.com",
        photo: PeggyMarcone
    },
    {
        id: 2,
        position: "First Vice President",
        name: "Sue Smith",
        unit: 110,
        phoneNumber: "801-628-0025",
        term: 2024,
        email: "suesmithpc@yahoo.com",
        photo: SueSmith
    },
    {
        id: 3,
        position: "Second Vice President",
        name: "Donna Mueller",
        unit: 456,
        phoneNumber: "480-433-2347",
        term: 2023,
        email: "donnakay917@hotmail.com",
        photo: DonnaMueller
    },
    {
        id: 4,
        position: "Treasurer",
        name: "Dee Hammann",
        unit: 282,
        phoneNumber: "480-226-3470",
        term: 2023,
        email: "ammiegram@gmail.com",
        photo: DeeHammann
    },
    {
        id: 5,
        position: "Secretary",
        name: "Dennis Miller",
        unit: 524,
        phoneNumber: "612-801-4297",
        term: 2024,
        email: "dmaws@aol.com",
        photo: DennisMiller
    }
]

export default Officers; 