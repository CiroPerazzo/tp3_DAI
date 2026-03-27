import dayjs from "dayjs";

const ahora = dayjs();
function dias()
{
    const fecha = {
        fecha : ahora.format("DD/MM/YYYY"),
        hora : ahora.format("HH:mm")
    }
    return (fecha)
 
}


export default dias




/*, */