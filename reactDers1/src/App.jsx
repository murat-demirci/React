import './App.css'

function App() {
  const students = 43000;
  const frag = false;
  const url = 'https://picsum.photos/250/250';
  return (
    <>
      <h1>Isim</h1>
    <div>murat</div>
    <input type="text" />

    {frag ? <p>{students}</p>: <div></div>}
    <img src={url} alt="" />
    <div style={
			{
				width:'250px',
				height:'250px',
				backgroundColor:'yellow'
			}
		}></div>
    <div className='box'></div>
    </>
  );
}

export default App
