const WebApiURL = "http://localhost:3001";
class Service{
  postAddEmployee = async(dataObject) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    await fetch(WebApiURL, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
    }
}
export default Service;