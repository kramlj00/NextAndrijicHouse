import config from '../../config';
import siteConfig from '../../siteconfig.json';

const useSiteConfig = () => {
    return { ...siteConfig, url: config.url };
};

export default useSiteConfig;
