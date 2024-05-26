
export default function Input({ label, invalid, ...props}){
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase ';
  let inputCss = 'w-full px-3 leading-tight  border rounded shadow ';
  if(invalid){
    labelClasses += ' text-red-400';
    inputCss += ' text-red-500 bg-red-100 border-red-300';
  }else{
    labelClasses += ' text-stone-200';
    inputCss += ' bg-stone-300 text-grey-700'
  }
    return (
        <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputCss} {...props} />
        </p>
    );
}