# Spring Transaction

ACID : 
Atomicity (all or nothing) (bank account money transfer)
Consistency (data should be same in source and destination pre and post transaction)
Integrity (should be invisible to others)
Durability (permenant change no rollback)

# Distributed Transaction
1. Application Manager
2. Transaction Manager
3. Resource Manager

Two phase commit
RM -> Transaction Manager -> ask RM to commit

# Transaction Isolation Level
Dirty Reads (before commit checking whether)
Non Repeatable Reads
Phantom Reads

TRANSACTION_READ_UNCOMMITTED
TRANSACTION_READ_COMMITTED
TRANSACTION_REPEATABLE_READ (default)
TRANSACTION_SERIALIZABLE (strict/low performance)

# Optimistic and Pessimistic Locking
- Optimistic
versionNo and timeStamp
