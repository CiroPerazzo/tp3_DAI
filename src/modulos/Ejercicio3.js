import dayjs from "dayjs";

const ahora = dayjs();
function dias()
{
    const pajaro = {
        fecha : ahora.format("DD/MM/YYYY"),
        horaCompleta : ahora.format("HH:mm"),
        segundos :ahora.second()
    }
    return (pajaro)
 
}


export default dias
