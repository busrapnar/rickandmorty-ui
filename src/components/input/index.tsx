type Props = {
  name: string;
  title: string;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = (props: Props) => {
  return (
    <div>
      <div className="mt-4">
        <label className="mb-2 text-sm text-gray-600">{props.title}</label>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg  focus:border-primary  focus:outline-none focus:ring focus:ring-green-700  focus:ring-opacity-20"
          defaultValue={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
