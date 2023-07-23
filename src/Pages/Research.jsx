
const researchPapers = [
    {
        title: 'Sentiment Analysis of YouTube Comment',
        link: 'https://www.emerald.com/insight/content/doi/10.1108/LHT-12-2020-0323/full/html',
    },
    {
        title: 'patient resource cross-sectional analysis of content',
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0889540621005254',
    },
    {
        title: 'Road accidents analysis using machine learning',
        link: 'https://ieeexplore.ieee.org/abstract/document/9362403/',
    },

];
const Research = () => {
    return (
        <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-5">Recommended Research Papers</h4>
            <ul className="list-disc pl-8">
                {researchPapers.map((paper, index) => (
                    <li key={index}>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {paper.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Research;