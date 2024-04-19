type FilterLayoutProps = {
    title: React.ReactNode;
    children: React.ReactNode;
    classes?: string;
};

const FilterLayout = ({ title, children, classes }: FilterLayoutProps) => {
    return (
        <div className={classes}>
            <div className="font-medium text-gray-600 uppercase text-sm mb-3">{title}</div>
            {children}
        </div>
    );
};

export default FilterLayout;
