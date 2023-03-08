
import Home from '../components/Home'
// import {connect} from 'react-redux'
import  {addToCart}  from '../services/Actions/action'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
    data : state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default function HomeContainer() {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }
