import React from 'react';

type ISectionProps = {
	children: React.ReactNode;
};
const Section = ({ children }: ISectionProps) => {
	return <section className="py-10 lg:py-20">{children}</section>;
};

export default Section;
