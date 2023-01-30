import React from 'react';
import { Accordion } from 'react-bootstrap';

const Accordion = () => {

    const [ categories, setCategories] = useState([]) 

    useEffect(() => {
       
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
        .then(res => setCategories (res.data))
       },[])

       console.log
    return (
        <div>
              <Accordion defaultActiveKey="1">
        <Accordion.Header>Stove</Accordion.Header>
        <Accordion.Body>
         <h1>{category.name}</h1>
        </Accordion.Body>
    </Accordion>

        </div>
    );
};

export default Accordion;