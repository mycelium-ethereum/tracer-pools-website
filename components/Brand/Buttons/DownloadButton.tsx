const Download: React.FC<{
  url: string;
  children: string;
}> = ({ url, children }) => {
  return (
    <a download href={url}>
      <button className="ml-1 rounded-lg bg-action-cell py-[6px] px-2.5 text-[10px] font-bold text-highlight transition-colors duration-300 hover:bg-highlight hover:text-action-cell">
        {children}
      </button>
    </a>
  );
};

export default Download;
