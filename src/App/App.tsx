import './App.scss';

function App() {
  return (
    <div className="App" onClick={() => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((error: any) => console.error(`${error.message}`))
      }
      else {
        document.exitFullscreen()
      };
    }}>
    </div>
  );
}

export default App;
