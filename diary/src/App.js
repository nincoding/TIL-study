import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: 'one',
    content: '리액트',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: 'two',
    content: '너무',
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: 'three',
    content: '재밌다',
    emotion: 3,
    created_date: new Date().getTime()
  },
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
