class RingBuffer:
    def __init__(self, max_size):
        self.max_size = max_size
        self.data = []
        self.position = 0

    def get(self):
        print(self.data)
        return self.data

    def append(self, el):
        if len(self.data) != self.max_size:
            self.data.append(el)
        else:
            self.data[self.position] = el
            self.position = (self.position+1) % self.max_size


buffer = RingBuffer(3)

buffer.append('a')
buffer.append('b')
buffer.append('c')
buffer.get()
buffer.append('d')
buffer.append('e')
buffer.append('f')
buffer.get()
