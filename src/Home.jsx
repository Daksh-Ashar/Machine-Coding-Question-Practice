import Card from './components/Card';
import { SITE_CONFIG } from './Config/SiteConfig';

const Home = () => {
    return (
        <div style={{"padding":"1% 1%"}}>
            <h1>Questions</h1>
            {SITE_CONFIG.map((item) => (
                <Card key={item.path} title={item.title} path={item.path} />
            ))}
        </div>
    );
}


export default Home;