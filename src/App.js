import React, { useRef, useState } from 'react'
import Hello from './Hello.js';
import Wrapper from './Wrapper.js';
import Counter from './Counter.js';
import InputSample from './InputSample.js';
import UserList from './UserList.js';
import CreateUser from './CreateUser.js';

function App() {
  const [inputs, setInputs] = useState({
    username: '', 
  });
  const { username, email } = inputs;
  const onChange = e => {
    const  { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gamil.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false,
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false,
    }
]);

const nextId = useRef(4); //useRef는 특정 돔을 선택하기위해 쓸수도있지만,,,, 어떤 변수를 계속 기억(컴포넌트 리렌더링없이)하고싶을떄 사용

const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email,
  }
  //setUsers([...users, user])
  setUsers(users.concat(user));
  setInputs({
    username: '',
    email: '',
  });
  console.log(nextId.current); //4
  nextId.current += 1;
}

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
}

const onToggle = id => {
   setUsers(users.map(
     user => user.id === id
      ? { ...user, active: !user.active }
      : user
   ))
}

  return (
    <>  
    <Wrapper>
      <Hello name='react' color='red' isSpecial={true} />
      <Hello color='pink' />
    </Wrapper>
    <Counter />
    <InputSample />
    <CreateUser 
    username={username} 
    email={email} 
    onChange={onChange}
    onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
     {/*      
      <div className="gray-box"></div>
     */}
      
    </>
  );
}

export default App; 
