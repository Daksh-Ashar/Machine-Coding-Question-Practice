import Card from './components/Card';
import { SITE_CONFIG } from './Config/SiteConfig';

const Home = () => {
    return (
        <>
        <h1 style={{"padding":"1%"}}>Questions</h1>
        <div style={{"padding":"1% 1%", "display":"flex", "flexDirection":"row"}}>
            {SITE_CONFIG.map((item) => (
                <Card key={item.path} title={item.title} path={item.path} />
            ))}
        </div>
        </>
    );
}


export default Home;