var perf =require('./template.html');

class Index extends React.Component {
   render(){
      return (
         <iframe src={perf }></iframe>   /* like this */
      );
   }
}
export default Index;