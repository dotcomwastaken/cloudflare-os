const SelectWinesMark = ({ size, className }: { size: number; className?: string }) => (
  <img
    src="/brand/select-wines-mark.png"
    alt=""
    width={size}
    height={size}
    className={`object-contain ${className ?? ''}`}
  />
)

export default SelectWinesMark
