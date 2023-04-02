# Exception Handling

Exception vs Error

- Use try with resources
- finally block is used for resources clean up
- System.gc() will break finally block

# Exception Hierarchy

Object Class

Throwable

Exception                       Error
CheckedException                VirtualMachineError
UncheckedException              AssertionError

CheckedException :
ClassNotFoundException
SQLException
FileNotFoundException

UncheckedException :
All Runtime Exception
NullPointerException
ClassCastException
ArrayIndexOutOfBoundException