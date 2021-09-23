import axios from 'axios';
import {useState, useEffect} from 'react'

function PersonDetail(){

    const idList = [162, 142, 159, 144, 145, 146, 166];
    const basedUrl = 'https://apps.loopevo.com/apis/students/student.php';
    let [person, setPerson] = useState({});
    const [personId, setPersonId] = useState(idList[0])
    const [name, setName] = useState('')

    useEffect(() => {
        axios
            .post(basedUrl, {
                    id: personId
            })
            .then((response) => {
                console.log (response.data);
                setPerson(response.data);
            });
    }, [personId, name])

    const onChangeId = (event) => {
        console.log(event.target.value);
        setPersonId(event.target.value)
        // e ok sa facem requestul intr-o functie, dar il facem in useEffect
        // axios
        //     .post(basedUrl, {
        //             id: event.target.value
        //     })
        //     .then((response) => {
        //         console.log (response.data);
        //         setPerson(response.data);
        //     });
    }


    return (
        <>
            <label>Name: </label>
                <input value = {name} onChange = {e => setName(e.target.value)}></input>
            <select onChange = {onChangeId} > 
                {idList.map(id => <option key = {id} value={id}>{id}</option>)}
            </select>
            <p>{name}</p>
            <ul>
                <li>{person.email}</li>
                <li>{person.first_name}</li>
                <li>{person.last_name}</li>
            </ul>

        </>
    );
}

export default PersonDetail;