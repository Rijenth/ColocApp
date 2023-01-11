class ColocationModel:
    attributes = {
        'id',
        'name',
        'rentDue',
        'rentPaid',
        'createdAt',
        'updatedAt'
    }

    def __init__(self, id ,name, rentDue, rentPaid, createdAt, updatedAt):
        self.id = id,
        self.name = name,
        self.rentDue = rentDue,
        self.rentPaid = rentPaid,
        self.createdAt = createdAt,
        self.updatedAt = updatedAt