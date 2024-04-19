type LogoProps = {
    source: string;
    alt?: string;
    classes?: string;
};

const Logo = ({ source, alt, classes }: LogoProps) => {
    return (
        <a href="/" className="w-40 block mx-auto">
            <img src={source} className={'w-100 h-40 rounded-full mx-auto' + ' ' + classes} alt={alt} />
        </a>
    );
};

export default Logo;
