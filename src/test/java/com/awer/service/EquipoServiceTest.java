package com.awer.service;

import com.awer.model.Equipo;
import com.awer.repository.EquipoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class EquipoServiceTest {

    @Mock
    private EquipoRepository repo;

    @InjectMocks
    private EquipoService service;

    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testBuscarPorNombre() {
        when(repo.findByNombreContainingIgnoreCase("Madrid"))
                .thenReturn(List.of(new Equipo(1L, "Real Madrid", "La Liga", "España")));

        List<Equipo> res = service.buscarPorNombre("Madrid");
        assertEquals(1, res.size());
        assertEquals("Real Madrid", res.get(0).getNombre());
    }
}
