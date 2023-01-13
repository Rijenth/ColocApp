from src.model.BasicModel import BasicModel

class ColocataireModel(BasicModel):
    attributes = {
        'userId': int,
        'colocationId': int,
    }

    serializable = {
        'id': int,
        'userId': int,
        'colocationId': int,
    }


    def __init__(self, data):
        super().__init__(data)