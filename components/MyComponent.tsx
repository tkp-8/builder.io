import { Card, CardContent } from './ui/card';

export default function MyComponent(props) {
  return (
    <>
      <Card className="mt-5">
        <CardContent>
          Enter some text...
        </CardContent>
      </Card>
      
      <Card className="mt-5 h-[200px] bg-orange-600">
        <CardContent className="h-full">
          {/* Your content here */}
        </CardContent>
      </Card>
    </>
  );
}
