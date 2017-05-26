
<?php
class A
{
    function foo()
    {
        if (isset($this)) {
            echo '$this est� definida (';
            echo get_class($this);
            echo ")\n";
        } else {
            echo "\$this no est� definida.\n";
        }
    }
}

class B
{
    function bar()
    {
        A::foo();
    }
}

$a = new A();
$a->foo();

A::foo();
$b = new B();
$b->bar();

B::bar();
?>
