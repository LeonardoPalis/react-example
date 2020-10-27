import './App.css';
import { getWritePermissionUser } from './utils/userPermission';
import Button from './components/Button';
import ButtonMaterial from '@material-ui/core/Button';

function User(name, gender, role) {
  const date = new Date().toDateString();

  const create = () => {
    return {
      name,
      gender,
      createdAt: date,
      role
    }
  }
  return {
    create,
  }
}


function App() {

  const writePermissionRoles = ['admin', 'super_user', 'owner'];

  let newUser1 = User('Hudson', 'masculino', 'admin');
  newUser1 = newUser1.create();
  let newUser2 = User('Jordan', 'masculino', 'owner');
  newUser2 = newUser2.create();


  const users = [newUser1, newUser2];

  const writePermissionsUsers = getWritePermissionUser(users)

  console.log('newUser', newUser1)
  return (
    <div className="App">
      <h1>Bem vindo à Code Dojo!!</h1>
      <Button text='dar um feedback' />
    <input />
      <ButtonMaterial variant="contained" color="secondary">
        Secondary
      </ButtonMaterial>
      <h2>Lista de TODOS usuários</h2>
      <ul>
        {
          users.map(user => {

            return (<li>{`Nome: ${user.name} - Genero: ${user.gender} Dia da criação: ${user.createdAt} Role: ${user.role}`}</li>);
          })
        }
      </ul>
      <h2>Lista de usuários com permissão de escrita!</h2>
      {
        writePermissionsUsers.map(user => {

          return (<li>{`Nome: ${user.name} - Genero: ${user.gender} Dia da criação: ${user.createdAt} Role: ${user.role}`}</li>);
        })
      }
    </div>
  );
}

export default App;
