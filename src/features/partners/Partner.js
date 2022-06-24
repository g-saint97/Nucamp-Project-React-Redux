const Partner = () => {
    if (partner) {
        return (
            <>
                <h5 className='fw-bold'>{name}</h5>
                    {description}
            </>
        );
    }
    return null;
};

export default Partner;