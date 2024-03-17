interface MyLinkProps {
  linkName: string;
  adress: string;
}

export const MyLink = ({ linkName, adress }: MyLinkProps): JSX.Element => {
  return (
    <>
      <div className="link-class">
        <a href={adress} target="_blank" rel="noopener noreferrer">
          {linkName}
        </a>
      </div>
    </>
  );
};
