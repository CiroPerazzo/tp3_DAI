import dayjs from "dayjs";

const ahora = dayjs();
function dias()
{
    const pajaro = {
        fecha : ahora.format("DD/MM/YYYY"),
        horaCompleta : ahora.format("HH:mm:ss")
    }
    return (pajaro)
 
}


export default dias
