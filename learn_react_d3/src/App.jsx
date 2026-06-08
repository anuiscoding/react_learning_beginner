import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='anu' age={21} img='https://images.unsplash.com/photo-1763198302194-86616d1cc75a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='gousu' age={18} img='https://scontent.cdninstagram.com/v/t51.2885-19/470095444_2702361506615568_3512739940807205746_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=e9IVDofbwAYQ7kNvwEgOJe_&_nc_oc=AdpX71o7cC9GpXea5GEWAQvuFIGUqUqR2W0jsQ_RBl5JXDtqmiret5bk5qXUBlF4s90&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a2a8&oh=00_Af0gcWphQVd7HlIoV86invCKzSd8nIGPGXrGJnFUIom7rw&oe=69DE6B53'/>
    </div>
  )
}

export default App