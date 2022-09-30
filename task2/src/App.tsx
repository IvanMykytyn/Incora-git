import {Pagination} from './components' 

import styles from './app.module.scss'
// import styles from './components/pagination/pagination.module.scss'
import cn from 'classnames'

const customStyles = {
  btn: cn(styles.darkBtn),
  activeBtn: cn(styles.activeDarkBtn)
}

function App() {
  return (
    <div className="App">
      <Pagination totalItems={1} perPage={10} />
      <Pagination totalItems={24} activePage={2} perPage={10} />
      <Pagination totalItems={44} perPage={10} />
      <Pagination totalItems={104} activePage={7} perPage={10} classes={customStyles}/>
      <Pagination totalItems={120} activePage={18} perPage={3} />
      <Pagination totalItems={1240} activePage={499} perPage={2} />

      <hr style={{marginTop: '15px'}}/>

      <Pagination totalItems={1} perPage={10} withActions={true} />
      <Pagination totalItems={24} perPage={10} withActions={true} classes={customStyles}/>
      <Pagination totalItems={44} perPage={10} withActions={true}/>
      <Pagination totalItems={104} perPage={10} withActions={true} activePage={3}/>
      <Pagination totalItems={120} perPage={3} activePage={40} withActions={true} classes={customStyles}/>
      <Pagination totalItems={1240} perPage={2} withActions={true} activePage={281}/>
    </div>

  );
}

export default App;
