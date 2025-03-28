interface ILevelBarProps {
  value: number;
  max?: number;
}

const LevelBar = ({ value, max = 250 }: ILevelBarProps) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="flex items-center gap-2 w-full">
      {/* Valor numérico */}
      <span className="text-gray-800 font-medium w-10 text-right">{value}</span>
      
      {/* Barra de progreso */}
      <div className="relative w-full h-3 bg-green-100 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default LevelBar;
