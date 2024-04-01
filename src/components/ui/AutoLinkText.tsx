interface Props {
  text: string;
  className: string;
}

const AutoLinkText: React.FC<Props> = (props: Props) => (
  <div
    className={props.className}
    dangerouslySetInnerHTML={{
      __html: props.text.replace(
        /(https?:\/\/[^\s]+)/g,
        (url) =>
          `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
      ),
    }}
  />
);

export default AutoLinkText;
