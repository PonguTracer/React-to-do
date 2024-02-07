import './App.css';

function App() {
  return (
    <div className="mt-5 container">
      <div>
        <div>
          Your To-do's
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Feed dog</td>
                <td>Sarah</td>
              </tr>
              <tr>
                <th scope='col'>2</th>
                <td>Get haircut</td>
                <td>Louis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
