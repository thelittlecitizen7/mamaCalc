import React, { useEffect, useState } from 'react';
import MarkButton from './MarkButtons';
import Text from './Text'
import {Col,Row,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NumberButton() {
    
    let [mark,setMark] = useState("")

    let [lsNumbers,setNumbersValue] = useState([])

    let [result,setResult] = useState(0)

    function setNumber(number){
        
        console.log(number)
        
        lsNumbers.push(number)
        
        console.log(lsNumbers)
        
        if (lsNumbers.length == 1){
            setResult(lsNumbers[0])
            return;
        }
        else if (lsNumbers.length == 2){
            setResult(`${lsNumbers[0]} ${mark} ${lsNumbers[1]} = ${factoryResult()}`)
            return;
        }
        else{
            setResult('cannot give more than 2 params')
            return;
        }
    }

    function factoryResult(){

        var result = 0;       
        console.log(lsNumbers)
        lsNumbers.forEach((value) => {
            console.log(value)
            if (mark === "+"){
                result += value
            }            
        })

        console.log(result)
        setNumbersValue([])
        setResult([])
        return result
        
    }

    function renderNumbers(){
        return (
        <table>
            <tbody>
            <tr>
                <td><MarkButton onClick={() =>{setNumber(1)}} value={1}/></td>
                <td><MarkButton onClick={() =>{setNumber(2)}} value={2}/></td>
                <td><MarkButton onClick={() =>{setNumber(3)}} value={3}/></td>
                <td><MarkButton onClick={() =>{setMark("/")}} value={"/"}/></td>
            </tr>
            <tr>
                <td><MarkButton onClick={() =>{setNumber(4)}} value={4}/></td>
                <td><MarkButton onClick={() =>{setNumber(5)}} value={5}/></td>
                <td><MarkButton onClick={() =>{setNumber(6)}} value={6}/></td>
               <td><MarkButton onClick={() => {setMark("+")}} value={"+"}/></td>
            </tr>
            <tr>
                <td><MarkButton onClick={() =>{setNumber(7)}} value={7}/></td>
                <td><MarkButton onClick={() =>{setNumber(8)}} value={8}/></td>
                <td><MarkButton onClick={() =>{setNumber(9)}} value={9}/></td>
                <td><MarkButton onClick={() =>{setMark("-")}} value={"-"}/></td>
            </tr>
            <tr>
                <td><MarkButton onClick={() => {setNumber(0)}} value={0}/></td>
                <td><MarkButton onClick={() => {setMark("*")}} value={"*"}/></td>
                <td><MarkButton onClick={() => {factoryResult()}} value={"="}/></td>
            </tr>
            </tbody>
        </table>
        )
    }
  return (
    <div className="NumberButton">
        <Container>
            <Row className="justify-content-md-center ">
                <Col md={4} className="text-center">
                    <Text value={result}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center" >
                <Col md={4} className="text-center">
                {/* <center>{renderNumbers()}</center> */}
                        {renderNumbers()}
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default NumberButton;
