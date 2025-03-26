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
    <Table className="mx-auto my-6 max-w-md overflow-hidden rounded-lg pt-4">
      <TableHeader>
        <TableRow>
          <TableHead colSpan="2" className="bg-secondary-background text-primary-text text-center hover:bg-secondary-background">
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
                  ? "bg-tertiary-background hover:bg-tertiary-background"
                  : "bg-secondary-background hover:bg-secondary-background"
              }
            >
              <TableCell className="font-medium text-center text-primary-text">{key}</TableCell>
              <TableCell className="text-primary-text text-center">{value}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default SpecsTable;
