import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <div>
      <header id="header" >
        <img src={logo} alt="Logo showing a money bag" />
        <h1>React Investment Calculator</h1>
      </header>
    </div>
  );
}   