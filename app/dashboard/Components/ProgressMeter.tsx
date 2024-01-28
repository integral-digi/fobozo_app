const ProductMeter = ({bgcolor, progress, height}: any) => {
	
	const Parentsection = {
		height: height,
		width: '100%',
		backgroundColor: '#D7DAE5',
		borderRadius: 40,
		margin: 0
	}
	
	const Childsection = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius: 40,
	}
	
	return (
        <section className='' style={Parentsection}>
            <section style={Childsection} />
        </section>
	);
};

export default ProductMeter;