import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SpecsTable = ({ specs }) => {
  return (
    <Table className="mx-auto my-6 max-w-md overflow-hidden rounded-lg border border-slate-600 pt-4">
      <TableHeader>
        <TableRow>
          <TableHead colSpan="2" className="bg-slate-700 text-slate-300 text-center hover:bg-slate-700">
            Características
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specs.map((spec, index) => {
          const [key, value] = Object.entries(spec)[0];
          return (
            <TableRow
              key={key}
              className={
                index % 2 === 0
                  ? "bg-slate-800 hover:bg-slate-800"
                  : "bg-slate-700 hover:bg-slate-700"
              }
            >
              <TableCell className="font-medium text-center text-white">{key}</TableCell>
              <TableCell className="text-slate-300 text-center">{value}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default SpecsTable;
