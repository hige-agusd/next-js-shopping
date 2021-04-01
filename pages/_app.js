import wrapper, {persistor} from '../store/store';
import Layout from '../src/components/layout';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App({ Component }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component />
      </Layout>
    </PersistGate>
  )
}



export default wrapper.withRedux(App);