import { useState } from "react";
import { Button } from "./components/Button";
import { EqualButton } from "./components/EqualButton";
import { Footer } from "./components/Footer";
import { InputCurrent } from "./components/InputCurrent";
import { InputPrevious } from "./components/InputPrevious";
import { OperationButton } from "./components/OperationButton";
import { Container, Content } from "./styles";

function App() {

  const [previousNumber, setPreviousNumber] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [operation, setOperation] = useState('');

  class Calculator {
    constructor(previousNumber, currentNumber) {
      this.previousNumber = previousNumber;
      this.currentNumber = currentNumber;
      this.operation = operation;
    }

    addDigit(digit) {

        if (digit === '.' && currentNumber.includes('.')) {
          return;
        }
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${digit}`)
        this.updateScreen();
     }

     processOperation(operation) {

        if (currentNumber === '' && operation !== 'C' && operation !== '=') {
          if (previousNumber !== '') {
            this.changeOperation(operation);
          }
          return;
        }

        let operationValue;
        const previous = +previousNumber.split(' ')[0];
        const current = +currentNumber;

        switch (operation) {
          case '+':
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, previous, current);
            break;
          case '-':
            operationValue = previous - current;
            this.updateScreen(operationValue, operation, previous, current);
            break;
          case 'x':
            operationValue = previous * current;
            this.updateScreen(operationValue, operation, previous, current);
            break;
          case '÷':
            operationValue = previous / current;
            this.updateScreen(operationValue, operation, previous, current);
            break;
          case '⌫':
            this.processDelOperator();
            break;
          case 'CE':
            this.processClearCurrentOperation();
            break;
          case 'C':
            this.processClearOperation();
            break;
          case '=':
            this.processEqualOperator();
            break;
          default:
            return;
        }

     }

     updateScreen(
      operationValue = null, 
      operation = null, 
      previous = null, 
      current = null
     ) {

        if (operationValue === null) {
          setOperation(currentNumber);
        } else {
          if (previous === 0) {
            operationValue = current;
          }
          setPreviousNumber(`${operationValue} ${operation}`);
          setCurrentNumber('');
        }

     }

     changeOperation(operation) {

      const mathOperation = ['+', '-', 'x', '÷'];

      if (!mathOperation.includes(operation)) {
        return;
      }

      setPreviousNumber(previousNumber.slice(0, -1) + operation)

     }

     processDelOperator() {
      setCurrentNumber(currentNumber.slice(0, -1));
     }

     processClearCurrentOperation() {
      setCurrentNumber('');
     }

     processClearOperation() {
      setPreviousNumber('');
      setCurrentNumber('');
     }

     processEqualOperator() {
      const operation = previousNumber.split(' ')[1];
      this.processOperation(operation);

      if (!currentNumber) {
        setPreviousNumber(currentNumber)
        setCurrentNumber(previousNumber.split(' ')[0])
        return;
      }
     }
    
  }

  const calc = new Calculator(previousNumber, currentNumber);

  const handleAddNumber = (value) => {

    if (+value >= 0 || value === '.') {
        calc.addDigit(value);
    } else {
        calc.processOperation(value);
    }
}

  return (
    <>
    <Container>
      <h3>Calculadora</h3>
      <InputPrevious value={previousNumber} />
      <InputCurrent value={currentNumber} />
      <Content>
        <OperationButton label='CE' onClick={() => handleAddNumber('CE')}/>
        <OperationButton label='C' onClick={() => handleAddNumber('C')}/>
        <OperationButton label='⌫' onClick={() => handleAddNumber('⌫')}/>
        <OperationButton label='÷' onClick={() => handleAddNumber('÷')}/>


        <Button label='7' onClick={() => handleAddNumber('7')}/>
        <Button label='8' onClick={() => handleAddNumber('8')}/>
        <Button label='9' onClick={() => handleAddNumber('9')}/>
        <OperationButton label='x' onClick={() => handleAddNumber('x')}/>

 
        <Button label='4' onClick={() => handleAddNumber('4')}/>
        <Button label='5' onClick={() => handleAddNumber('5')}/>
        <Button label='6' onClick={() => handleAddNumber('6')}/>
        <OperationButton label='-' onClick={() => handleAddNumber('-')}/>
  
  
        <Button label='1' onClick={() => handleAddNumber('1')}/>
        <Button label='2' onClick={() => handleAddNumber('2')}/>
        <Button label='3' onClick={() => handleAddNumber('3')}/>
        <OperationButton label='+' onClick={() => handleAddNumber('+')}/>
     
  
        <Button label='0' onClick={() => handleAddNumber('0')}/>
        <Button label='.' onClick={() => handleAddNumber('.')}/>
        <EqualButton label='=' onClick={() => handleAddNumber('=')} />
    
      </Content>
    </Container>
    <Footer name='Bruno Ramos' />
    </>
  );
}

export default App;