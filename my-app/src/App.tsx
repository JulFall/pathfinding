import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    var id = 0;
    var duzyBen = document.getElementById("duzyBen")
      for(var i = 0; i < 10; i++){
          for(var j = 0; j < 10; j++){
              var element = document.createElement("div");
              element.setAttribute("id", String(id));
              element.setAttribute("class","pole");
              duzyBen?.appendChild(element);
              id++;
            }
          }
    var idDijkstry = Math.floor(Math.random() * 99);
    var idFilippy = Math.floor(Math.random() * 99);

    document.getElementById(String(idDijkstry))?.classList.add("dijkstra");
    document.getElementById(String(idFilippy))?.classList.add("filippa");

    var ilePrzeszkod = Math.floor(Math.random() * 10);

    for (var l = 0; l < ilePrzeszkod; l++) {
        var losoweId = Math.floor(Math.random() * 99);
        var pole = document.getElementById(String(losoweId));

        while (pole?.classList.contains("dijkstra") || pole?.classList.contains("filippa")) {
            losoweId = Math.floor(Math.random() * 99);
            pole = document.getElementById(String(losoweId));
        }

        pole?.classList.add("przeszkoda");
    }

  }, []);

  return (
    <>
    <div id="duzyBen">
    </div>
    </>
  )
}

export default App;
